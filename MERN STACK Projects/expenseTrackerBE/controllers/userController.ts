import { Request, Response, NextFunction } from "express";
import { UserService } from "services/userService";

export class UserController {
  constructor(private userService: UserService) {}
  //
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("in the controller");
      const users = await this.userService.createUser(req.body);
      res.json(users);
    } catch (e: any) {
      next(e);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.login(req.body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.getAllUsers();
      res.json(user);
    } catch (e: any) {
      next(e);
    }
  }
  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const getUserById = await this.userService.getUserById(req.params.id);
      res.json(getUserById);
    } catch (e: any) {
      next(e);
    }
  }
  async deleteUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const deleteUser = await this.userService.deleteUserById(req.params.id);
      res.json(deleteUser);
    } catch (e: any) {
      next(e);
    }
  }
  async editUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const editUserById = await this.userService.editUserById(id, userData);
      res.json(editUserById);
    } catch (e: any) {
      next(e);
    }
  }
}
