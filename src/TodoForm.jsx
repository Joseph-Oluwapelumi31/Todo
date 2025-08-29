import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import  AddIcon from '@mui/icons-material/Add';

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add Todo..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}

