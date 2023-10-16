import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Container, Grid, } from '@mui/material';


const ProductFilter = ({
    categoryFilter,
    sortDirection,
    searchTerm,
    onCategoryChange,
    onSortChange,
    onSearchChange,
}) => {
    return (
        <Container>
            <form>

                <Grid container spacing={2} mt={0} mb={2}>

                    <Grid item xs={12} sm={4}>
                    
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select value={categoryFilter} onChange={onCategoryChange} 
                            label="Category">
                                {/* <MenuItem value="All">All</MenuItem> */}
                                <MenuItem value="Dry Fruit">Dry Fruit</MenuItem>
                                <MenuItem value="Dried Fruit">Dried Fruit</MenuItem>
                                <MenuItem value="Juice and Energy Drinks">Juice and Energy Drinks</MenuItem>
                                <MenuItem value="Chocolate">Chocolate</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Sort By</InputLabel>
                            <Select value={sortDirection} onChange={onSortChange} label="Sort By">
                                <MenuItem value="asc">Low to High</MenuItem>
                                <MenuItem value="desc">High to Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Search by Name"
                            value={searchTerm}
                            onChange={onSearchChange}
                        />
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default ProductFilter;
