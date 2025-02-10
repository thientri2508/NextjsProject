export const sanitizeInput = (input: string) => {
    return input.replace(/[^a-zA-Z0-9\s]/g, ''); // Loại bỏ ký tự đặc biệt, chỉ giữ lại chữ, số và khoảng trắng
  };