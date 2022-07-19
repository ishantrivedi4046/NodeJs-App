import { Router } from "express";

const router = Router();

router.use("/", (req, res, next) => {
  res.render("404");
});

export default router;
