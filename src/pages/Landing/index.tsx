import GitHub from '../../assets/github.png';

const Landing = () => {
  return (
    <div className={'bg-black'}>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center text-white">
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
