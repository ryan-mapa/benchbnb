import { $CombinedState } from "redux"

export const fetchBench = (benchId) => {
  return $.ajax({
    method: "GET",
    url: `/api/benches/${benchId}`
  })
}


