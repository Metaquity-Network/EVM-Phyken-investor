import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ComingSoon: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const router = useRouter();
  const { hash } = router.query;

  useEffect(() => {
    if (hash) {
      fetch(`/api/verify/verify-email?hash=${hash}`)
        .then((response) => {
          if (response.status === 200) {
            setIsConfirmed(true);
          } else if (response.status === 410) {
            setIsTokenExpired(true);
          } else {
            setIsTokenExpired(true);
          }
        })
        .catch((error) => {
          console.error('Error verifying email:', error);
          setIsTokenExpired(true);
        });
    }
  }, [hash]);

  return (
    <div className="relative z-10 overflow-hidden bg-white px-4 dark:bg-boxdark-2 sm:px-8">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="no-scrollbar overflow-y-auto py-20">
          <div className="mx-auto w-full max-w-[600px]">
            <div className="text-center">
              <Link href="https://phyken.network/" className="mx-auto mb-10 inline-flex">
                <img width={300} height={32} src="https://phyken.network/logo.png" alt="Logo" />
              </Link>

              <h1 className="mb-2.5 text-3xl font-black text-black dark:text-white lg:text-4xl xl:text-[50px] xl:leading-[60px]">
                {isConfirmed ? 'Email Verified' : isTokenExpired ? 'Please contact the team' : 'Please wait...'}
              </h1>
            </div>
          </div>

          {/* <!-- social link start --> */}
          <div className="mt-10 text-center">
            <p className="mb-5 font-medium text-black dark:text-white">Follow Us On</p>

            <div className="flex items-center justify-center gap-4">
              <Link
                target="_blank"
                href="https://x.com/phyken_network"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DFE4EA] hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1878_14093)">
                    <path
                      d="M19.15 5.7375L20.65 3.9375C21.05 3.45 21.15 3.075 21.2 2.8875C20.15 3.5625 19.2 3.7875 18.75 3.7875H18.525L18.375 3.6375C17.325 2.85 16.15 2.4375 14.95 2.4375C12.95 2.4375 11.3 4.1125 11.3 6.35C11.3 6.475 11.3 6.675 11.3375 6.8L11.45 7.525L10.55 7.4875C6.75 7.3125 3.225 3.8875 2.5875 3.375C1.5375 5.25 2.1375 7.05 2.775 8.175L4.05 10.275L2.025 9.15C2.0625 10.725 2.6625 11.95 3.825 12.8625L4.8375 13.725L3.825 14.025C4.725 16.275 5.8875 17.025 6.9375 17.4L8.325 17.875L6.5125 18.3C4.3875 19.8 1.875 19.6875 0.9375 19.575C2.9125 21.225 5.6 21.6 7.35 21.6C8.85 21.6 10.1 21.45 10.45 21.3375C20.65 19.025 21.05 9.4875 21.05 7.6125V7.375L21.35 7.2C22.55 6.05 23.1 5.3625 23.45 4.9875C23.3 5.025 23.1125 5.1 22.925 5.1375L19.15 5.7375Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1878_14093">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/company/phykennetwork"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DFE4EA] hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2641 2H2.62402C2.08003 2 1.62402 2.456 1.62402 3V21C1.62402 21.544 2.08003 22 2.62402 22H21.241C21.785 22 22.241 21.544 22.241 21V3C22.241 2.456 21.785 2 21.2641 2ZM8.18903 19.0001H5.34002V9.63199H8.18903V19.0001ZM6.76402 8.44595C5.86902 8.44595 5.14002 7.70795 5.14002 6.80095C5.14002 5.89395 5.86902 5.15495 6.76402 5.15495C7.63703 5.15495 8.38702 5.89395 8.38702 6.80095C8.38702 7.70795 7.63703 8.44595 6.76402 8.44595ZM18.887 19.0001H16.038V14.0231C16.038 13.1051 16.016 11.7851 14.655 11.7851C13.272 11.7851 13.058 12.818 13.058 13.9571V19.0001H10.209V9.63199H13.058V10.6301H13.079C13.443 10.0271 14.2101 9.464 15.388 9.464C18.072 9.464 18.887 11.199 18.887 13.737V19.0001Z"
                    fill=""
                  />
                </svg>
              </Link>

              <Link
                target="_blank"
                href="http://t.me/phykennetwork"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DFE4EA] hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 9.76L15.07 16.02C15 16.33 14.75 16.5 14.47 16.5C14.32 16.5 14.16 16.46 14.02 16.38L11.4 14.97L10.14 16.19C10.06 16.27 9.94 16.32 9.82 16.35C9.7 16.37 9.57 16.36 9.47 16.31C9.14 16.15 9.04 15.72 9.29 15.43L10.43 14.13L9.55 13.6L8.05 13C7.7 12.86 7.69 12.33 8.04 12.18L15.56 9.17C15.79 9.08 16.04 9.19 16.13 9.42C16.18 9.52 16.19 9.63 16.17 9.74L16.5 9.76Z"
                    fill=""
                  />
                </svg>
              </Link>

              <Link
                target="_blank"
                href="https://discord.com/invite/W7NVRXguYq"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DFE4EA] hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.317 4.369c-1.164-.513-2.403-.89-3.688-1.122-.081.144-.169.33-.235.478-1.385-.207-2.746-.207-4.103 0-.066-.144-.154-.334-.235-.478a18.935 18.935 0 00-3.688 1.122c-.387.288-.735.63-1.047 1.01C2.56 9.632 1.918 14.138 2.292 18.57c1.643 1.236 3.384 1.963 5.276 2.459.414-.576.784-1.186 1.104-1.819-.585-.198-1.14-.455-1.665-.756.138-.109.275-.221.411-.336 3.213 1.5 6.664 1.5 9.872 0 .138.115.273.227.411.336-.525.301-1.08.558-1.665.756.32.633.69 1.243 1.104 1.819 1.893-.496 3.634-1.223 5.276-2.459.457-5.4-.708-10.864-3.55-14.191-.312-.38-.66-.722-1.047-1.01zM8.473 15.88c-.79 0-1.438-.723-1.438-1.608s.64-1.608 1.438-1.608c.804 0 1.456.723 1.438 1.608 0 .885-.64 1.608-1.438 1.608zm6.94 0c-.79 0-1.438-.723-1.438-1.608s.64-1.608 1.438-1.608c.804 0 1.456.723 1.438 1.608 0 .885-.64 1.608-1.438 1.608z"
                    fill=""
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* <!-- social link end --> */}
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-around">
        <div className="flex h-full gap-20">
          <span className="block h-full w-0.5 animate-line1">
            <span className="block h-55 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
          <span className="block h-full w-0.5 animate-line2">
            <span className="block h-36 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
          <span className="ml-10 block h-full w-0.5 animate-line3">
            <span className="block h-40 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
        </div>

        <div className="flex h-full gap-20">
          <span className="mr-10 block h-full w-0.5 animate-line1">
            <span className="block h-55 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
          <span className="block h-full w-0.5 animate-line2">
            <span className="block h-36 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
          <span className="block h-full w-0.5 animate-line3">
            <span className="block h-40 w-0.5 bg-bodydark1 dark:bg-strokedark"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
