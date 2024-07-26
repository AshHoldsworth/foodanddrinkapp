namespace FoodAndDrink.Services
{
    public class ServiceResult<T> where T : class
    {
        public T? Data { get; set; }
        public bool Success { get; set; }
        public string? ErrorMessage { get; set; }

        public static ServiceResult<T> SuccessResult(T? data)
        {
            return new ServiceResult<T> { Data = data, Success = true };
        }

        public static ServiceResult<T> FailureResult(string errorMessage)
        {
            return new ServiceResult<T> { Success = false, ErrorMessage = errorMessage };
        }
    }
}

