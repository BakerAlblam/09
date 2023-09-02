import { useState } from 'react';
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { GalleryVertical, Home, LogIn, LogOut, PenSquare, User } from 'lucide-react';


const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useUser()
  const userId = user?.user?.id
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <nav className="bg-gray-900  overflow-hidden text-white">
        <div className="mx-auto w- px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-3 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`hidden h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
             
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="bg-gray-900 text-white rounded-md px-3 py-2  font-medium"
                    aria-current="page"
                  >
                    <Home />
                  </Link>
                  <Link
                    to="/alljobs"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium"
                  >
                  <GalleryVertical />
                  </Link>
                  <Link
                    to="/postjob"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium"
                  >
                    <PenSquare />
                  </Link>
                  <Link
                    to={`/profile/${userId}`}
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium"
                  >
                    <User />
                  </Link>

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
                
            {user.user?.id === "user_2QeDU0WqRIu9W0sj6Tp4J5VPW6K" && <Link className='text-white' to={"/centcom"}> Centcom</Link> }
                
              <div className="relative ml-3">
                <div>
                  {user.isSignedIn && <UserButton afterSignOutUrl="/" />}
                </div>
              
              </div>
            {
  !user.isSignedIn ? (
    <SignInButton>
      <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
      <LogIn />
      </span>
    </SignInButton>
  ) : (
    user && (
      <SignOutButton>
        <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
        <LogOut />
        </span>
      </SignOutButton>
    )
  )
}

            </div>
          </div>
        </div>

        <div className={`sm:hidden flex flex-1 items-center justify-center ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu"> {/* Updated class */}
  <div className="space-y-1 px-2 pb-3 pt-2">
    <Link
      to="/"
      className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
      aria-current="page"
    >
      <Home />
    </Link>
    <Link
      to="/kinos"
      className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
    >
      <GalleryVertical />
    </Link>
    <Link
      to="/tonights-kino"
      className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
    >
      <PenSquare />
    </Link>
    <Link
      to="/le-museum"
      className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
    >
      
    </Link>
  </div>
</div>
<hr className=" h-0.5  mx-auto rounded border-1 bg-pink-700 "  />

      </nav>
  
  );
};

export default Nav;
