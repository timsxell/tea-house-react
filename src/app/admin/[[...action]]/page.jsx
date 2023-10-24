'use client'

import AdminPanel from "../../components/admin/AdminPanel/AdminPanel";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { selectUserRole } from "@/store/features/auth/selectors";
import { redirect } from "next/navigation";

export default function AdminPage({
    params
}){

    const role = useSelector(state => selectUserRole(state));
    const isAdmin = role === 'ADMIN' || role === 'FATHER';
    console.log(`role: ${role}`);

    if(!isAdmin) redirect('/', 'replace');



    const action = params.action ? params.action[0] : null

    const AddItem = dynamic(() => import('@/app/components/admin/AddItem/AddItem'));
    const EditItem = dynamic(() => import('@/app/components/admin/EditItem/EditItem'));
    const EditStock = dynamic(() => import('@/app/components/admin/EditStock/EditStock'));
    const DeleteItem = dynamic(() => import('@/app/components/admin/DeleteItem/DeleteItem'));
    const SeeOrders = dynamic(() => import('@/app/components/admin/SeeOrders/SeeOrders'));


    return(
        isAdmin && <div>
            {!action && <AdminPanel />}
            {action === 'add-item' && <AddItem/>}
            {action === 'edit-item' && <EditItem/>}
            {action === 'edit-stock' && <EditStock/>}
            {action === 'delete-item' && <DeleteItem/>}
            {action === 'see-orders' && <SeeOrders/>}
        </div>
    )
}