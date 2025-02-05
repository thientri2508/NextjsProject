export const convertToTree = (categories: { id: number; p_id: number; name: string }[]) => {
    return categories
      .filter((cat) => cat.p_id === 0) // Lọc danh mục cha (p_id = 0)
      .map((parent) => ({
        category: parent.name,
        children: categories
          .filter((child) => child.p_id === parent.id) // Tìm danh mục con có p_id trùng với id danh mục cha
          .map(({ id, name }) => ({ id, name })), // Chỉ lấy id và name cho danh mục con
      }));
  };