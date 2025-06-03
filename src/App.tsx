import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from './components/navbar'
import Connector from './components/connector'

function App() {
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<SidebarProvider>
					<AppSidebar />
					<main className="w-full h-screen">
						<Navbar />
						<Connector />
					</main>
				</SidebarProvider>
			</ThemeProvider>
		</>
	)
}

export default App
