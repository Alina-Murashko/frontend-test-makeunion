import {UserPage} from "./feature/userPage/UserPage.tsx";
import {ListUsers} from "./feature/listUsers/ListUsers.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from "./feature/layout/Layout.tsx";
import {ProfileUser} from "./feature/profileUser/ProfileUser.tsx";
import {Todolist} from "./feature/todolist/Todolist.tsx";


function App() {

    return (
      <BrowserRouter>
              <Routes>
                  <Route element={<Layout />} path={'/'}>
                      <Route path="/users" element={<ListUsers />}/>
                      <Route path="/users/:id" element={<UserPage />} />
                      <Route index element={<ProfileUser />} />
                      <Route path="/todolist" element={<Todolist />} />
                  </Route>
              </Routes>
      </BrowserRouter>

  )
}

export default App





