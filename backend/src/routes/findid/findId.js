const express = require("express");
const router = express.Router();

const { User } = require("../../../models");

router.post("/", async (req, res) => {
  const { realname, email } = req.body;

  try {
    const user = await User.findOne({
      where: {
        realname,
        email,
      },
    });
    if (!user) {
      // 해당 정보를 가진 사용자가 없는 경우
      return res
        .status(404)
        .json({ message: "해당하는 사용자 정보가 없습니다." });
    }

    // 해당 정보를 가진 사용자가 있는 경우
    return res.status(200).json({ message: "사용자 정보를 확인 중입니다." });
  } catch (error) {
    res.status(500).send({ message: "서버 오류가 발생했습니다." });
  }
});

module.exports = router;

