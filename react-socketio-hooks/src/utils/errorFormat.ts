import { MATRIX_ERROR_MESSAGES } from "../config/constants";
import { IErrorMessages } from "../types/ErrorType";

export const getErrorFormatByErrorNumber = (
  statusCode: number
): IErrorMessages => {
  const errorMessage = MATRIX_ERROR_MESSAGES[statusCode] ?? "Unknown Error";

  return {
    statusCode,
    error: errorMessage,
  };
};
