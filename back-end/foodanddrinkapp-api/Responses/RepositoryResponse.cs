namespace FoodAndDrink.Services.Responses
{
	public class RepositoryResponse<T> where T : class
    {
        public T? Data { get; set; }
        public bool Success { get; set; }
        public string? ErrorMessage { get; set; }

        public static RepositoryResponse<T> SuccessResult(T? data)
        {
            return new RepositoryResponse<T> { Data = data, Success = true };
        }

        public static RepositoryResponse<T> FailureResult(string errorMessage)
        {
            return new RepositoryResponse<T> { Success = false, ErrorMessage = errorMessage };
        }
    }
}

