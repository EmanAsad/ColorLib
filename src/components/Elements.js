import React from 'react';
import '../App.css';
import d from "../assets/img/elements/d.jpg";

const ButtonArea = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto p-4 border-t border-dotted border-gray-200 m-4">
        <h3 className="text-lg font-semibold mb-4">Sample Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Default</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Primary</a>
          <a href="#" className="bg-green-600 text-white px-4 py-2 rounded">Success</a>
          <a href="#" className="bg-blue-400 text-white px-4 py-2 rounded">Info</a>
          <a href="#" className="bg-yellow-400 text-white px-4 py-2 rounded">Warning</a>
          <a href="#" className="bg-red-600 text-white px-4 py-2 rounded">Danger</a>
          <a href="#" className="text-blue-600 px-4 py-2">Link</a>
          <a href="#" className="bg-gray-200 text-gray-400 px-4 py-2 rounded cursor-not-allowed">Disable</a>
        </div>
      </div>
    </section>
  );
};

const LeftAligned = () => {
  return (
    <div className="border-t border-gray-200 pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-6">Left Aligned</h3>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 p-4">
          <img src={d} alt="Example" className="w-full rounded shadow-md" />
        </div>
        <div className="w-full md:w-3/4 mt-6 md:mt-0 p-4">
          <p className="text-justify">
            Recently, the US Federal government banned online casinos from operating in America by making it illegal to
            transfer money to them through any US bank or payment system. As a result of this law, most of the popular
            online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino
            players found themselves being chased by the Federal government. But, after a fortnight, the online casino
            industry came up with a solution and new online casinos started taking root. These began to operate under a
            different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major
            part of this was enlisting electronic banking systems that would accept this new clarification and start doing
            business with me. Listed in this article are the electronic banking systems that accept players from the United
            States that wish to play in online casinos.
          </p>
        </div>
      </div>
    </div>
  );
};

const RightAligned = () => {
  return (
    <div className="border-t border-gray-200 pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-6">Right Aligned</h3>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4 p-4">
          <p className="text-justify">
            Over time, even the most sophisticated, memory-packed computer can begin to run slow if we don’t do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish. To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. You can do this through regular maintenance and PC performance optimization programs.
          </p>
          <p className="text-justify">
            Before we discuss all of the things that could be affecting your PC’s performance, let’s talk a little about what symptoms.
          </p>
        </div>
        <div className="w-full md:w-1/4 mt-6 md:mt-0 p-4">
          <img src={d} alt="Example" className="w-full rounded shadow-md" />
        </div>
      </div>
    </div>
  );
};

const DefinitionSection = () => {
  const definitions = ['Definition 01', 'Definition 02', 'Definition 03'];
  return (
    <div className="border-t border-gray-200 pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-6">Definition</h3>
      <div className="flex flex-wrap">
        {definitions.map((definition, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-gray-100 p-4 rounded shadow-md">
              <h4 className="text-md font-semibold mb-5">{definition}</h4>
              <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to
                transfer money to them through any US bank or payment system. As a result of this law, most of the popular
                online casino networks.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlockQuotes = () => {
  return (
    <div className="border-t border-gray-200 pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-6">Block Quotes</h3>
      <div className="w-full">
        <blockquote className="p-8 bg-gray-100 border-l-4 border-blue-900 rounded shadow-md">
          “Recently, the US Federal government banned online casinos from operating in America by making it illegal to
          transfer money to them through any US bank or payment system. As a result of this law, most of the popular
          online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino
          players found themselves being chased by the Federal government. But, after a fortnight, the online casino
          industry came up with a solution and new online casinos started taking root. These began to operate under a
          different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major
          part of this was enlisting electronic banking systems that would accept this new clarification and start doing
          business with me. Listed in this article are the electronic banking.”
        </blockquote>
      </div>
    </div>
  );
};

const Elements = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <div>
    <div className="bg-orange-100 w-full p-10">
      <h1 className="text-5xl text-center p-2 font-semibold">Elements</h1>
      <h1 className="text-center text-lg text-orange-800">Home | <span>Elements</span></h1>
    </div>
      <LeftAligned />
      <RightAligned />
      <DefinitionSection />
      <BlockQuotes />
    </div>
    </div>
  );
};

export default Elements;
