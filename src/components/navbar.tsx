import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import avatar1 from '@/assets/image/profile/1.png'
import avatar2 from '@/assets/image/profile/2.png'
import avatar3 from '@/assets/image/profile/3.png'
import avatar4 from '@/assets/image/profile/4.png'
import { Share2 } from 'lucide-react'
import ChatSvg from '@/assets/icons/chat.svg'
import SearchSvg from '@/assets/icons/search.svg'
import LibrarySvg from '@/assets/icons/library.svg'

export default function Navbar() {
	return (
		<>
			<div className="h-20 border-b border-sidebar-border w-full flex justify-between items-center px-5 py-2">
				<div className="flex gap-3">
					<Button className="bg-[#191C21] p-0" size={'icon'}>
						<svg
							style={{ width: '1.25rem', height: '1.25rem' }}
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.6667 15.8333H10.4167M3.33334 13.2101V15.6667C3.33334 15.7587 3.40796 15.8333 3.5 15.8333H5.95661C6.00081 15.8333 6.0432 15.8158 6.07446 15.7845L14.8822 6.97683C14.9472 6.91174 14.9472 6.80621 14.8822 6.74112L12.4255 4.28452C12.3605 4.21943 12.2549 4.21943 12.1898 4.28452L3.38215 13.0922C3.3509 13.1235 3.33334 13.1659 3.33334 13.2101Z"
								stroke="#C2C8D3"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>
					<div className="flex flex-col">
						<h3 className="text-xl text-[#FAFAFA]">Chat 1</h3>
						<p className="hidden sm:block text-xs text-[#8C8C8C] mt-1">
							Exciting Strategies for the Launch of a Groundbreaking product
						</p>
					</div>
				</div>

				<div className="flex gap-8 items-center">
					{/* All Avatars */}
					<div className="flex">
						<Avatar className="border-4 border-[#191C21] z-50">
							<AvatarImage src={avatar1} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="relative">
							<span className="absolute w-3 h-3 aspect-square bg-[#22C55E] shadow-[0px_0px_30px_0px_#4AC97E7A] rounded-full border-4 border-[#191C21] z-50 -top-0 right-0"></span>
							<Avatar className="border-4 border-[#191C21] z-40 -ml-2">
								<AvatarImage src={avatar2} />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>

						<div className="relative">
							<span className="absolute w-3 h-3 aspect-square bg-[#22C55E] shadow-[0px_0px_30px_0px_#4AC97E7A] rounded-full border-4 border-[#191C21] z-50 -top-0 right-0"></span>
							<Avatar className="border-4 border-[#191C21] z-30  -ml-2">
								<AvatarImage src={avatar3} />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<Avatar className="border-4 border-[#191C21] z-20 -ml-2">
							<AvatarImage src={avatar4} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="border-4 bg-[#191C21] border-[#191C21] z-10 -ml-2">
							<AvatarImage src={''} />
							<AvatarFallback className="bg-[#191C21] text-[#666666] text-xs">+4</AvatarFallback>
						</Avatar>
					</div>
					{/* Share Button */}
					<div className="flex gap-2 items-center text-[#666666]">
						<Share2 width={13.33} height={15} />
						Share
					</div>
				</div>
			</div>
			<div className="h-12 w-full border-b border-sidebar-border flex items-center justify-start gap-8 px-6">
				{/* Chat Icon */}
				<div className="relative h-full">
					<div className="h-full flex justify-center items-center gap-3 px-1 text-sm">
						<img src={ChatSvg} alt="" width={18} height={17} /> Chat
					</div>
					<div className="h-1 absolute bottom-0 rounded-t-full w-full bg-[#00BCD4]"></div>
				</div>

				{/* Search Icon */}
				<div className="relative h-full">
					<div className="h-full flex justify-center items-center gap-3 px-1 text-sm text-[#8C8C8C]">
						<img src={SearchSvg} alt="" width={16} height={15} /> Search
					</div>
					<div className="h-1 absolute bottom-0 rounded-t-full w-full bg-[#1E1E1E]"></div>
				</div>

				{/* Library Icon */}
				<div className="relative h-full">
					<div className="h-full flex justify-center items-center gap-3 px-1 text-sm text-[#8C8C8C]">
						<img src={LibrarySvg} alt="" width={18} height={17} /> Search
					</div>
					<div className="h-1 absolute bottom-0 rounded-t-full w-full bg-[#1E1E1E]"></div>
				</div>
			</div>
		</>
	)
}
