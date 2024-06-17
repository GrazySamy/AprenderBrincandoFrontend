import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  IconButton,
  Box,
  useTheme
} from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

// Dados de exemplo
const usersData = [
  { id: 0, dataHora: '2024-01-20 08:00', usuario: 'larissa@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 1, dataHora: '2024-01-10 08:00', usuario: 'kelvin@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 2, dataHora: '2024-01-01 08:00', usuario: 'joana@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 3, dataHora: '2024-01-20 08:00', usuario: 'isabela@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 4, dataHora: '2024-01-10 08:00', usuario: 'hidelfonso@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 5, dataHora: '2024-01-01 08:00', usuario: 'geovana@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 6, dataHora: '2024-01-20 08:00', usuario: 'fabio@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 7, dataHora: '2024-01-10 08:00', usuario: 'elisa@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 8, dataHora: '2024-01-01 08:00', usuario: 'daniela@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 9, dataHora: '2024-01-20 08:00', usuario: 'carlos@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 10, dataHora: '2024-01-10 08:00', usuario: 'beatriz@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' },
  { id: 11, dataHora: '2024-01-01 08:00', usuario: 'alexandre@gmail.com', categoria: 'Suporte Técnico', localizacao: 'Belo Horionte - MG' }
];

// Componente customizado para os botões de paginação
const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, display: 'flex', alignItems: 'center' }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};

const DataTableVideos = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#8EA9DB' }}>DATA/HORA</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#8EA9DB' }}>USUÁRIO</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#8EA9DB' }}>CATEGORIA</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#FFFFFF', backgroundColor: '#8EA9DB' }}>LOCALIZAÇÃO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
              <TableRow key={user.id} sx={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F2F2F2' }}>
                <TableCell   >{user.dataHora}</TableCell>
                <TableCell>{user.usuario}</TableCell>
                <TableCell>{user.categoria}</TableCell>
                <TableCell>{user.localizacao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={usersData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
        labelRowsPerPage={<span>Linhas por página:</span>}
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        rowsPerPageOptions={[10, 20, 30, 40, 50]}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: false,
        }}
        sx={{
          '& .MuiTablePagination-toolbar': {
            alignItems: 'center'
          },
          '& .MuiTablePagination-selectLabel': {
            display: 'flex',
            alignItems: 'center',
            marginTop: '15px'
          },
          '& .MuiTablePagination-displayedRows': {
            display: 'flex',
            alignItems: 'center',
            marginTop: '15px'
          },
          '& .MuiTablePagination-actions': {
            display: 'flex',
            alignItems: 'center'
          },
        }}
      />
    </Paper>
    </>
  );
};

export default DataTableVideos;
