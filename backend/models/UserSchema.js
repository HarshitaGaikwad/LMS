import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
    password:
    {
     type: String,
     required:true
    },
      date: {
        type: Date,
        default: Date.now
      }
});

// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//       return next();
//   }
//   try {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//       next();
//   } catch (error) {
//       next(error);
//   }
// });

const User= mongoose.model("User",UserSchema,"users");
export default User;