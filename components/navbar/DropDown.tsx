
import Link from "next/link";
import { Button } from "../ui/button"
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu"
import { LuAlignLeft } from "react-icons/lu";


function DropDown() {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button  className="dark:bg-[#2A2A40] bg-gray-200 rounded-xl ">
                  <LuAlignLeft className="w-6 h-6" />
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-40 z-[99] border-none rounded-xl bg-gray-200 dark:bg-[#2A2A40]' align='start' sideOffset={10} >
              <DropdownMenuItem>
                  <Link href='/' className="dark:text-[#EDEDED]">home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Link href='/about' className="dark:text-[#EDEDED]">about</Link>
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default DropDown