import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
} from '@/components/ui/sidebar'
import { ChevronLeft, PlusCircle } from 'lucide-react'
import { NavUser } from './nav-user'
import { Button } from './ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import lightModeToggle from '@/assets/icons/light-mode-toggle.svg'
import darkModeToggle from '@/assets/icons/dark-mode-toggle.svg'
import { useTheme } from './theme-provider'
import { data } from '@/constants/data'

export function AppSidebar() {
	const { setTheme } = useTheme()
	const { toggleSidebar } = useSidebar()

	const chats = [{ title: 'Chat 1' }, { title: 'Chat 2' }, { title: 'Chat 3' }]
	const projects = [{ title: 'Project Alpha' }, { title: 'Project Beta' }]

	return (
		<Sidebar>
			<SidebarHeader className="border-sidebar-border border-b h-20">
				<NavUser user={data.user} />
			</SidebarHeader>
			<SidebarContent className="mt-1">
				<SidebarGroup className="border-sidebar-border border-b">
					<SidebarGroupLabel className="flex justify-between items-center text-[#474747]">
						Chats <PlusCircle />
					</SidebarGroupLabel>
					<SidebarGroupContent className="my-4">
						<SidebarMenu className="pl-3">
							{chats.map((item, indx) => (
								<Button
									style={
										indx === 0
											? {
													background: 'linear-gradient(117.58deg, rgba(0, 188, 212, 0.16) -47.79%, rgba(120, 133, 255, 0) 100%)',
													boxShadow: `0px 1px 3px 0px #0607080D, 0px 1px 2px -1px #0607080D, inset 0px 2px 12px #1A1D21A3`,
											  }
											: {}
									}
									className="justify-start py-5 pl-3 font-normal text-sm"
									variant={indx === 0 ? 'navigation' : 'ghost'}>
									{item.title}
								</Button>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel className="flex justify-between items-center text-[#474747]">
						PROJECTS <PlusCircle />
					</SidebarGroupLabel>
					<SidebarGroupContent className="my-4">
						<SidebarMenu className="pl-3">
							{projects.map(item => (
								<Button className="justify-start py-5 pl-3 font-normal text-sm" variant={'ghost'}>
									{item.title}
								</Button>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="h-20 border-t border-sidebar-border flex items-center justify-between flex-row px-4">
				<div className="rounded-full flex w-fit p-1 bg-[#191C21] gap-1">
					<img
						src={lightModeToggle}
						alt=""
						onClick={() => setTheme('light')}
						className="hover:cursor-pointer hover:opacity-95 w-[30px] aspect-square"
					/>
					<img
						src={darkModeToggle}
						alt=""
						onClick={() => setTheme('dark')}
						className="hover:cursor-pointer hover:opacity-95 w-[30px] aspect-square"
					/>
				</div>
				<div className="flex items-center justify-start text-[#767F90] hover:cursor-pointer" onClick={toggleSidebar}>
					<ChevronLeft width={16} className="text-[#767F90]" />
					<ChevronLeft width={16} className="-ml-2.5 text-[#767F90]" />
					<p className="text-xs ml-1">Close</p>
				</div>
			</SidebarFooter>
		</Sidebar>
	)
}
