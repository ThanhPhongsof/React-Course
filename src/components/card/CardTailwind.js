import React from 'react';

const CardTailwind = (props) => {
    return (
        <div className="relative">
        <div className="w-full rounded-lg h-[400px]">
          <img className="block w-full h-full object-cover rounded"
            src="https://cdn.dribbble.com/users/2400293/screenshots/16199819/media/da37d2697adeab224a21b8b85a0ed225.png?compress=1&resize=1200x900&vertical=top"
            alt=""
          ></img>
        </div>
        <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-x-3">
              <img className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                src="https://cdn.dribbble.com/users/2400293/screenshots/17040958/media/4962f801be5fbfd65d807df3f7eff4ae.png?compress=1&resize=1200x900&vertical=top"
                alt=""
              ></img>
              <div className="">@zndrson</div>
            </div>
            <div className="card-meta">
              <img src="/icon-heart.svg" alt="heart"></img>
              <span>256</span>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-title">Cosmic Perspective</div>
            <div className="card-ammount" fontSize="22px">
              12,000 PSL
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardTailwind;