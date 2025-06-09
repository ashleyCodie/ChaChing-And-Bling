import UserModel from "../schemas/userModel.js";

// TODO: Need to return the updated user object

const userUpdateWishList = async (req, res) => {
  const { id } = req.params;
  const { description, productId, image, price, productName, sizes } = req.body;
  console.log(description, productId, image, price, productName, sizes);

  try {
    // Get user
    const user = await UserModel.findOne({ _id: id });

    // Is item in wishlist
    const isInWishList = user.wishList.find(
      (product) => product.id === productId
    );

    // If item is already in wishlist remove it
    if (isInWishList) {
      state.user.wishList = state.user.wishList.filter(
        (product) => product.id !== productId
      );
    }
    // If item is not in wishlist, add it
    else {
      user.wishList.push({ _id: productId, description, image, price, productName, sizes });
    }

    // Save updates
    user.save();

    console.log("user", user);

    res
      .status(200)
      .json({ message: "User has been Updated.", user: user, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export default userUpdateWishList;