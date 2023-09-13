'use client'
import { Typography } from "@mui/material";
import ConfirmDialog from "@/components/Dialog/confirmDialog";


export default function HomePage() {
    return (
        <ConfirmDialog
            open={true}
            onClose={() => { }}
            onConfirm={() => { }}
            onCancel={() => { }}
        />
    )
};