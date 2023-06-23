const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({ 
  cloud_name: 'dmvzuaeqi', 
  api_key: '378964518742911', 
  api_secret: '7NaFJUuXAMYeX_FPrbuetMlri2A' 
});
//instance of cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,

  allowedFormats: ["jpg", "png"],
  params: {
    folder: "nodejs",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

module.exports = storage;
