import PaginaPadrao from 'components/PaginaPadrao';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<div>Home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
