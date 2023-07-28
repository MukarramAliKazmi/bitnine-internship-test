import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosResponse } from 'axios'

import { refreshToken, logout } from '@/redux/reducers/auth-reducer'
import { RootState } from '@/redux/store'

import axios, { axiosPrivate } from '@/api/axios'

const useAxiosPrivate = () => {
  const oldAccessToken = useSelector(
    (state: RootState) => state.auth.accessToken,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${oldAccessToken}`
        }
        return config
      },
      error => Promise.reject(error),
    )

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: any) => {
        const originalRequest = error?.config

        if (error.response?.status === 403 && !originalRequest?.sent) {
          originalRequest.sent = true

          try {
            const res = await axios.get('/refresh', {
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: true,
            })

            const { accessToken } = res.data

            dispatch(refreshToken(accessToken))

            originalRequest.headers.Authorization = `Bearer ${accessToken}`
            return await axiosPrivate(originalRequest)
          } catch (refreshError) {
            dispatch(logout())
            throw refreshError
          }
        }

        return Promise.reject(error)
      },
    )

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor)
      axiosPrivate.interceptors.response.eject(responseInterceptor)
    }
  }, [oldAccessToken, dispatch])

  return axiosPrivate
}

export default useAxiosPrivate
