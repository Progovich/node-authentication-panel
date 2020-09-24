const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.render('login');
});

exports.getPage = catchAsync(async (req, res, next) => {
  const { page } = req.params;

  //Checking the Url for letters
  const validateUrlOnlyInt = /[^\d]/.test(page);

  if (validateUrlOnlyInt) {
    return next(new AppError('Not Found', 404));
  }

  res.send('You log in!');
});

exports.goToMainPage = catchAsync(async (req, res, next) => {
  return res.send('You log in!');
});
