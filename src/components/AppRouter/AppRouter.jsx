import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PeopleDetail from '../../page/PeopleDetailPage/PeopleDetailPage';
import PeopleList from '../../page/PeopleListPage/PeopleListPage';


const AppRouter = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<PeopleList />} />
        <Route path="/detail" element={<PeopleDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;