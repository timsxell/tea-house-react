'use client'

import styles from './styles.module.css'
import CategoriesPick from '../CategoriesPick/CategoriesPick'
import CategoriesApi from '@/categories/categories';
import { useState } from 'react';
import { useCreateItemMutation } from '@/store/services/adminApi';
import { selectUser } from '@/store/features/auth/selectors';
import { useSelector } from 'react-redux';


export default function AddItem({

}) {

    const [selected, setSelected] = useState('')
    const handleClick = (id) => setSelected(id);

    const [createItem, { data, isLoading }] = useCreateItemMutation();

    const user = useSelector(state => selectUser(state));
    console.table(user);

    async function handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        formData.append('name', name);
        formData.append('priceFor100', price);
        formData.append('parentCategoryId', selected);
        for(let key of img){
            formData.append('images', key);
        }

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }


        try {
            let smt = await createItem(formData).unwrap()
            console.log(smt);
        } catch (error) {
            console.log(error.message);
        }

    }

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState([]);

    return (
        <div className={styles.wrapper}>
            <CategoriesPick handleClick={handleClick} selectedId={selected} />
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Item category:
                    <input type='text' required placeholder='pick a category from sidebar' disabled value={selected !== '' ? CategoriesApi.getAncestryPath(selected).join(' > ') : ""} />
                </label>
                <label>
                    Enter product name:
                    <input type='text' required autoFocus placeholder='some chinese black puerh' value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Price for 100g:
                    <input type='number' required placeholder='10.5' min={0} step={0.01} value={price} onChange={e => setPrice(e.target.value)} />
                </label>
                <label>
                    Attach an item image:
                    <input type='file' multiple accept='image/*' onChange={e => setImg(e.target.files)} />
                </label>
                <button type='submit'>{isLoading ? '...' : `Add item`}</button>
            </form>
        </div>
    )
}
