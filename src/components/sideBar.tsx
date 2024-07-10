function MySidebar(){
    return(
        <div className="flex flex-row sm:gap-10">
	<div className="sm:w-full sm:max-w-[18rem]">
		<input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
		<label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
		<aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
			<section className="sidebar-title items-center p-4">
<img src="images/logo.svg" className="w-12" alt="" />
				<div className="flex flex-col">
					<span>Dermis</span>
					<span className="text-xs font-normal text-content2">image database</span>
				</div>
			</section>
			<section className="sidebar-content">
				<nav className="menu rounded-md">
					<section className="menu-section px-4">
						<ul className="menu-items">
							<li className="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M3 21l18 0"></path>
									<path d="M3 10l18 0"></path>
									<path d="M5 6l7 -3l7 3"></path>
									<path d="M4 10l0 11"></path>
									<path d="M20 10l0 11"></path>
									<path d="M8 14l0 3"></path>
									<path d="M12 14l0 3"></path>
									<path d="M16 14l0 3"></path>
								</svg>
								<a href="/">Home</a>
							</li>
							<li className="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
								</svg>
								<a href="/example">Example</a>
							</li>
							<li>
								<input type="checkbox" id="menu-1" className="menu-toggle" />
								<label className="menu-item justify-between" for="menu-1">
									<div className="flex gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
										<span>Example dropdown</span>
									</div>

									<span className="menu-icon">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
										</svg>
									</span>
								</label>

								<div className="menu-item-collapse">
									<div className="min-h-0">
										<a className="menu-item ml-6" href="/example-dropdown/joebiden">Joe Biden</a>
									</div>
								</div>
							</li>
						</ul>
					</section>
				</nav>
			</section>
			
		</aside>
	</div>
	<div className="flex w-full flex-col p-4">
		<div className="w-fit">
			<label htmlFor="sidebar-mobile-fixed" class="btn-primary btn sm:hidden">Open Sidebar</label>
		</div>
	</div>
</div>
    )
}

export default function Sidebar(){
    return(
        <MySidebar />
    )
}