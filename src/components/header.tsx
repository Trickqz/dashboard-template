import { ModeToggle } from "./mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    return (
        <header className="w-full h-16 border-b justify-between pl-3 pr-3 sm:pl-14 sm:pr-14 dark:border-white/20 border-black/30 items-center flex flex-row">
            <nav className="gap-4 flex text-sm font-normal dark:text-white/60 text-black/80">
                <a href="" className="hover:dark:text-white hover:text-black transition-all duration-200 ease-in-out">Overview</a>
                <a href="" className="hover:dark:text-white hover:text-black transition-all duration-200 ease-in-out">Customers</a>
                <a href="" className="hover:dark:text-white hover:text-black transition-all duration-200 ease-in-out">Products</a>
                <a href="" className="hover:dark:text-white hover:text-black transition-all duration-200 ease-in-out">Settings</a>
            </nav>
            <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-row gap-2">
                    <Input className="w-60 md:flex hidden" placeholder="Search..."></Input>
                    <ModeToggle />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage className="cursor-pointer" src="https://github.com/Trickqz.png" alt="@Trickqz" />
                            <AvatarFallback>PT</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Keyboard shortcuts
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Email</DropdownMenuItem>
                                        <DropdownMenuItem>Message</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>More...</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuItem>
                                New Team
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}