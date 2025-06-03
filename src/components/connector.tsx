import MicSvg from '@/assets/icons/mic.svg'
import PinSvg from '@/assets/icons/pin.svg'
import RSvg from '@/assets/icons/R.svg'
import InfoSvg from '@/assets/icons/info.svg'
import { Button } from '@/components/ui/button'
import SendSvg from '@/assets/icons/send.svg'
import ConnectorSvg from '@/assets/icons/connector.svg'
import ModifySvg from '@/assets/icons/modify.svg'
import ArrowRightSvg from '@/assets/icons/arrow-right.svg'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface IConnector {
	id: number
	heading: string
	subHeading: string
	url: string
}

export default function Connector() {
	const [active, setActive] = useState<IConnector | null>(null)

	const connectors = [
		{ id: 1, heading: 'Database', slug: 'database', subHeading: 'connect your database', url: '/connect database' },
		{ id: 2, heading: 'Single Link', slug: 'link', subHeading: 'connect through link', url: '/connect single-link' },
		{ id: 3, heading: 'Multi Link', slug: 'multi-link', subHeading: 'connect multiple links', url: '/connect multi-link' },
		{ id: 4, heading: 'Sheets', slug: 'sheets', subHeading: 'connect through google / excel sheets', url: '/connect sheets' },
	]

	const modify = [
		{ id: 1, heading: 'Database', subHeading: 'connect your database', url: '/edit database-name' },
		{ id: 2, heading: 'Links', subHeading: 'connect through link', url: '/edit link-name' },
		{ id: 3, heading: 'Sheets', subHeading: 'connect multiple links', url: '/edit sheets-name' },
		{ id: 4, heading: 'Disable Database', subHeading: 'connect through google / excel sheets', url: '/dis database-name' },
	]

	return (
		<div className="w-full bg-[#151515] h-[calc(100vh-8rem)] flex flex-col justify-between p-4">
			<div className="flex justify-center items-center flex-col h-full">
				{(active?.id === 1 || !active) && (
					<div className="text-center">
						<h1 className="text-white font-semibold text-4xl text-center">Hey, Mustafa</h1>
						<p className="text-[#666666] text-sm mt-4">You Can Ask Me Anything, I Am Here To Help You!</p>
					</div>
				)}
				{!active && (
					<div className="flex gap-12 mt-16">
						{/* Connector */}
						<div className="flex flex-col justify-center items-center gap-6">
							<div>
								<img src={ConnectorSvg} alt="" />
								<h3 className="text-lg">Connector</h3>
							</div>
							<div className="flex flex-col gap-2">
								{connectors.map(connector => (
									<Button
										className="border border-[#FFFFFF14] py-5 w-80 justify-between hover:opacity-80 hover:cursor-pointer"
										style={{
											background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%)',
										}}
										onClick={() => setActive(connector)}>
										<span className="text-[#B3B3B3]">{connector.heading}</span>
										<span className="text-[#474747] text-xs flex gap-2 items-center justify-center">
											{connector.url}{' '}
											<span>
												<img src={ArrowRightSvg} alt="" />
											</span>
										</span>
									</Button>
								))}
							</div>
						</div>

						{/* Modify */}
						<div className="hidden sm:flex flex-col justify-center items-center gap-6">
							<div>
								<img src={ModifySvg} alt="" />
								<h3 className="text-lg">Modify</h3>
							</div>
							<div className="flex flex-col gap-2">
								{modify.map(connector => (
									<Button
										className="border border-[#FFFFFF14] py-5 w-80 justify-between hover:opacity-80 hover:cursor-pointer"
										style={{
											background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%)',
										}}>
										<span className="text-[#B3B3B3]">{connector.heading}</span>
										<span className="text-[#474747] text-xs flex gap-2 items-center justify-center">
											{connector.url}{' '}
											<span>
												<img src={ArrowRightSvg} alt="" />
											</span>
										</span>
									</Button>
								))}
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Box to show in case database is clicked */}
			{active?.id === 1 && (
				<div className="w-full bg-[#0D0D0D] p-4 rounded-lg placeholder:text-xs placeholder:text-[#474747] focus-visible:outline-none mb-2 space-y-2">
					<p className="text-xs text-[#474747] pt-2 pb-3">
						Commands Matching <span className="text-white">data</span>
					</p>
					{connectors.map(connector => (
						<button
							className={cn(
								'flex flex-col items-start justify-center border border-[#151515] w-full rounded-lg text-white py-2 px-4 text-sm hover:cursor-pointer hover:bg-[#151515]/90',
								active.id === connector.id && 'bg-[#151515]'
							)}
							onClick={() => setActive(connector)}>
							{connector.slug}
							<span className="text-xs text-[#474747]">{connector.subHeading}</span>
						</button>
					))}
				</div>
			)}
			{/* Box to show in case single link is clicked */}
			{active?.id === 2 && (
				<div className="w-full p-4 rounded-lg border border-[#1E1E1E] mb-2">
					<div className="flex gap-2 items-center justify-start">
						<img src={RSvg} alt="" width={40} height={40} />
						<h1 className="flex items-center justify-start">
							Ryeuk <span className="text-xs text-[#333333] ml-2">Just Now</span>
						</h1>
					</div>
					<div className="ml-12 mt-6">
						<p className="text-white text-sm font-light">Enter your database details below to connect, all fields are required.</p>
						<div className="flex flex-col sm:flex-row justify-start items-start gap-4 mt-4">
							<div className="flex flex-col gap-4">
								<div className="w-60">
									<h5 className="text-[#8C8C8C] text-xs mb-2">Host</h5>
									<input
										className="rounded-md border py-2 px-3 placeholder:font-light placeholder:text-[#474747] placeholder:text-sm w-full"
										placeholder="Value"
									/>
								</div>
								<div className="w-60">
									<h5 className="text-[#8C8C8C] text-xs mb-2">User</h5>
									<input
										className="rounded-md border py-2 px-3 placeholder:font-light placeholder:text-[#474747] placeholder:text-sm w-full"
										placeholder="Value"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<div className="w-60">
									<h5 className="text-[#8C8C8C] text-xs mb-2">Port</h5>
									<input
										className="rounded-md border py-2 px-3 placeholder:font-light placeholder:text-[#474747] placeholder:text-sm w-full"
										placeholder="Value"
									/>
								</div>
								<div className="w-60">
									<h5 className="text-[#8C8C8C] text-xs mb-2">Password</h5>
									<input
										className="rounded-md border py-2 px-3 placeholder:font-light placeholder:text-[#474747] placeholder:text-sm w-full"
										placeholder="Value"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Box to show in case of multi link is clicked */}
			{active?.id === 3 && (
				<div className="w-full p-4 rounded-lg border border-[#1E1E1E] mb-2">
					<div className="flex gap-2 items-center justify-start">
						<img src={RSvg} alt="" width={40} height={40} />
						<h1 className="flex items-center justify-start">
							Ryeuk <span className="text-xs text-[#333333] ml-2">Just Now</span>
						</h1>
					</div>
					<div className="ml-12 mt-6">
						<p className="text-white text-sm font-light">Enter your database link below to connect and hit enter.</p>
						<div className="flex justify-start items-start gap-4 mt-4">
							<div className="w-full sm:w-3/7">
								<h5 className="text-[#8C8C8C] text-xs mb-2">Enter Your Link</h5>
								<input
									className="rounded-md border py-2 px-3 placeholder:font-light placeholder:text-[#474747] placeholder:text-sm w-full"
									placeholder="Value"
								/>
								<div className="mt-4 flex gap-2 items-center justify-start">
									<img src={InfoSvg} alt="" />
									<p className="text-xs">
										to enter multiple links use <span className="text-[#00BCD4]"> “/connect multi-link” </span>command
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Box to show in case of sheets is clicked */}
			{active?.id === 4 && (
				<div className="w-full p-4 rounded-lg border border-[#1E1E1E] mb-2">
					<div className="flex gap-2 items-center justify-start">
						<img src={RSvg} alt="" width={40} height={40} />
						<h1 className="flex items-center justify-start">
							Ryeuk <span className="text-xs text-[#333333] ml-2">Just Now</span>
						</h1>
					</div>
					<div className="ml-12 mt-6">
						<p className="text-white text-sm font-light">Please choose the type of sheet you want to connect.</p>
						<div className="flex justify-start items-start gap-4 mt-4">
							<button
								style={{
									background: 'linear-gradient(180deg, rgba(120, 133, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%',
								}}
								className="border border-[#FFFFFF14] px-4 py-1.5 rounded-md text-[#B3B3B3] hover:cursor-pointer">
								Google Sheet
							</button>
							<button
								style={{
									background: 'linear-gradient(180deg, rgba(120, 133, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%',
								}}
								className="border border-[#FFFFFF14] px-4 py-1.5 rounded-md text-[#B3B3B3] hover:cursor-pointer">
								Excel Sheet
							</button>
						</div>
					</div>
				</div>
			)}
			{active?.id !== 1 ? <InputBar /> : <InputBar text={active.url} />}
		</div>
	)
}

export function InputBar({ text }: { text?: string }) {
	const [inputValue, setInputValue] = useState<string>('')

	useEffect(() => {
		setInputValue(text || '')
	}, [text])

	return (
		<div className="relative w-full">
			<input
				className="w-full bg-[#0D0D0D] p-5 rounded-lg placeholder:text-xs placeholder:text-[#474747] focus-visible:outline-none text-xs"
				style={{
					borderImageSource: 'linear-gradient(117.58deg, rgba(0, 188, 212, 0.16) -47.79%, rgba(120, 133, 255, 0) 100%)',
					borderImageSlice: 1,
					boxShadow: 'inset 0px 4px 6px 0px #00000099',
				}}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				placeholder="Enter Your Prompt / Command Here..."
			/>
			<div className="flex gap-6 absolute right-4 bottom-2.5">
				<img src={MicSvg} alt="" className="hover:cursor-pointer" />
				<img src={PinSvg} alt="" className="hover:cursor-pointer" />
				<Button size={'icon'} className="bg-[#474747] p-2.5 hover:bg-[#474747]/85 hover:cursor-pointer">
					<img src={SendSvg} alt="" />
				</Button>
			</div>
		</div>
	)
}
