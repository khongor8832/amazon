exports.getCategories = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Бүх категориуд энд өгнө.",
    user: req.userId,
  });
};
exports.getCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорын мэдээллийг өгнө. `,
  });
};
exports.createCategory = (req, res, next) => {
  console.log("data:", req.body);
  res.status(200).json({
    success: true,
    data: "Шинээр категориуд үүсгэх.",
  });
};
exports.updateCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорыг өөрчлөх. `,
  });
};
exports.deleteCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорыг устгана. `,
  });
};
