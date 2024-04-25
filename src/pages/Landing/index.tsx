import GitHub from 'assets/github.png';

const Landing = () => {
  return (
    <div className={'bg-[#323d4a]'}>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center text-[#d9a535]">
          <a href={'https://github.com/orgs/KickflipUX/repositories'} className='mb-6 items-center'>
            {/* Logo placeholder for now. */}
          </a>
          <p className="font-display font-bold mt-4 text-3xl pb-1">KICKFLIP</p>
          <p className="font-mono">( your user experience )</p>
          <div className="mt-12">
            <a href={'https://github.com/orgs/KickflipUX/repositories'}>
              <img src={GitHub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
