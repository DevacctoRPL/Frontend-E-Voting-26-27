import type { ApiErrorResponse, ApiSuccessResponse } from '~/types/api'
import type { VotePayload, VoteResponse } from '~/types/vote'

const isSuccessResponse = <T>(
  response: ApiSuccessResponse<T> | ApiErrorResponse
): response is ApiSuccessResponse<T> => 'data' in response

export const useVote = () => {
  const api = useApi()

  const submit = async (payload: VotePayload) => {
    const response = await api.vote.submit(payload)

    if (isSuccessResponse<VoteResponse['data']>(response)) {
      return response
    }

    return response
  }

  return {
    submit
  }
}
