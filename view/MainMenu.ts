import {UserManager} from "../controller/UserManager";
import {AdminMenu} from "./AdminMenu";
import {UserMenu} from "./UserMenu";

const readlineSync = require('readline-sync');

export class MainMenu {
    private adminMenu: AdminMenu = new AdminMenu();
    private userMenu: UserMenu = new UserMenu();
    private userManager: UserManager = new UserManager();
    private menu: string = `
    1. Login
    2. Register
    3. Exit`

    public selection(): void {
        while (true) {
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 3) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    let username = readlineSync.question("Username: ");
                    let password = readlineSync.question("Password: ");
                    let status = this.userManager.login(username, password);
                    if (status == -1) {
                        console.log("Wrong username or password");
                    } else if (status == 0) {
                        // Goi den amdin
                        this.adminMenu.selection();
                    } else {
                        // Goi den User
                        this.userMenu.selection();
                    }
                    break;
                }
                case 2: {
                    let username = readlineSync.question("Username: ");
                    let password = readlineSync.question("Password: ");
                    this.userManager.register(username, password);
                    break;
                }
                case 3:
                    return;
            }
        }
    }
}