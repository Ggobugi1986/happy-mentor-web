// Import Reeact
import React from 'react';

// Import React-Router-Dom
import { useNavigate } from 'react-router-dom';

const ArticleList = ({ setIsSelected }) => {
  // Set UseNavigate Hook
  const navigate = useNavigate();

  // Set Data
  const articles = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <div className="p-4">
      {articles.map((article) => (
        <div
          key={article.id}
          className="flex mb-4"
          onClick={() => setIsSelected(true)}
        >
          <div className="flex-none w-20 h-20 rounded bg-slate-200"></div>
          <div className="mx-4 flex flex-col justify-between">
            <div className="text-lg font-bold text-slate-900">
              커뮤니티를 일구는 ‘마음토닥토닥 합창단’
            </div>
            <div className="flex justify-between">
              <div className="text-sm font-medium text-slate-500">
                용인시민일보
              </div>
              <div className="text-sm font-medium text-slate-500">
                2022.08.24
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
