import { useState } from 'react';
import Link from 'next/link';

const faq = () => {
  const [isOpen, setIsOpen] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
  });

  const toggleAccordion = (accordion) => {
    setIsOpen({ ...isOpen, [accordion]: !isOpen[accordion] });
  };

  return (
    <section id="TEAM" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="30"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white"
        >
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h3 id="accordion-flush-heading-1">
              <button
                onClick={() => toggleAccordion('accordion1')}
                type="button"
                className="flex items-center justify-between w-full py-5 font-bold text-left text-white bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded={isOpen.accordion1}
                aria-controls="accordion-flush-body-1"
              >
                <span>What is Pantheon and how does it work</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 ${isOpen.accordion1 ? 'rotate-180' : ''} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-1"
              className={`${isOpen.accordion1 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                PANTHEON is a token that we are planning to launch. It will be fully backed by a collateral and is designed to only increase in value against the collateral. This is achieved through a mint/burn mechanism that takes advantage of arbitrage opportunities. The token can be minted with Metis and can be burned to redeem Metis.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <Link
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    get started
                  </Link>{' '}
                  and start taking part in the Pantheon ecosystem
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-2">
              <button
                onClick={() => toggleAccordion('accordion2')}
                type="button"
                className="flex items-center justify-between w-full py-5 font-bold text-left text-white bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded={isOpen.accordion2}
                aria-controls="accordion-flush-body-2"
              >
                <span>Why is $PANTHEON backed by Metis instead of Ethereum?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 ${isOpen.accordion2 ? 'rotate-180' : ''} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-2"
              className={`${isOpen.accordion2 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                We believe Metis has more upside potential and is more volatile, which is beneficial for our purposes. Metis is the gas token for the Metis Ethereum Layer 2, which is the chain we are planning to deploy at.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-3">
              <button
                onClick={() => toggleAccordion('accordion3')}
                type="button"
                className="flex items-center justify-between w-full py-5 font-bold text-left text-white bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded={isOpen.accordion3}
                aria-controls="accordion-flush-body-3"
              >
                <span>
                How does the minting and burning process affect the price of $PANTHEON?                </span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 ${isOpen.accordion3 ? 'rotate-180' : ''} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-3"
              className={`${isOpen.accordion3 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                The price of $PANTHEON can only go up against its backing asset. This is because there are taxes for minting and burning. 
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                If someone mints, the price goes up. If someone burns, the price still goes up. However, everyone can still trade $PANTHEON without taxes in normal liquidity pools.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-4">
              <button
                onClick={() => toggleAccordion('accordion4')}
                type="button"
                className="flex items-center justify-between w-full py-5 font-bold text-left text-white bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                data-accordion-target="#accordion-flush-body-4"
                aria-expanded={isOpen.accordion4}
                aria-controls="accordion-flush-body-4"
              >
                <span>What are the future plans for the project after the token launch?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 ${isOpen.accordion4 ? 'rotate-180' : ''} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-4"
              className={`${isOpen.accordion4 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                After the token launch, we plan to launch a 100 pieces NFT collection, which will be the center of the whole ecosystem. The NFTs will receive a big portion of the revenue from the token and will have massive utilities in the next steps. 
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                We will also launch a collection of characters and items NFTs to add some gamification. In the long term, we will start delivering useful DeFi products that will stream revenue to the NFTs. Check out{' '}
                  <Link
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    PANTHEON Eco-system
                  </Link>{' '}
                  to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default faq;
