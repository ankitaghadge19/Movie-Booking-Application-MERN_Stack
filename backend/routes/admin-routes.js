import express from "express";
import { addAdmin, adminLogin, getAllAdmins, updateAdmin } from "../controllers/admin-controller";

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/", getAllAdmins);
adminRouter.put("/:id", updateAdmin);

export default adminRouter;