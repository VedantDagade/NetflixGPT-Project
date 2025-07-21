import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function MyDropdown() {

   

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-white text-black  px-4 rounded-2xl border-none font-semibold">
        Language
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => alert("Profile")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert("Settings")}>
          Marathi
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert("Logout")}>
          Hindi
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


