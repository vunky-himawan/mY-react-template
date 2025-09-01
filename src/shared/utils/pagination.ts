import type { TPaginationResponse } from "@/shared/types/pagination";
import type { IPaginateParam } from "@/shared/types/params";

export const makeSource = <T>(data?: TPaginationResponse<T>) => {
  return {
    data: data?.data,
    meta: data?.meta,
  };
};

export const makePagination = (pagination: IPaginateParam) => {
  return {
    page: pagination.page ?? 1,
    limit: pagination.limit ?? 10,
  };
};
