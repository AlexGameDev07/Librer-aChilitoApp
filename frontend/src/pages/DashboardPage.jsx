import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import List from "../components/List";
import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import InputText from "../components/InputText";
import { fetchData } from "../utilities/fetchDataUtility";
import { toast } from "react-hot-toast"; // <-- Importa toast

const resource = "libros";

function normalizarLibro(libro) {
    return {
        id: libro.id,
        titulo: libro.titulo || libro.libro || libro.Libro || "",
        autor: libro.autor || libro.Autor || "",
        estado: libro.estado || libro.Estado || "",
        genero: libro.genero || libro.Genero || "",
    };
}

const DashboardPage = () => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editLibro, setEditLibro] = useState(null);
    const [apiError, setApiError] = useState("");

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    // Cargar libros
    const cargarLibros = async () => {
        setLoading(true);
        setApiError("");
        try {
            const data = await fetchData({ resource });
            setLibros(data.map(normalizarLibro));
        } catch (e) {
            setApiError("Error al cargar los libros.");
        }
        setLoading(false);
    };

    useEffect(() => {
        cargarLibros();
    }, []);

    // Abrir modal para agregar
    const handleAdd = () => {
        setEditLibro(null);
        reset();
        setModalOpen(true);
    };

    // Abrir modal para editar
    const handleEdit = (libro) => {
        setEditLibro(libro);
        setValue("titulo", libro.titulo);
        setValue("autor", libro.autor);
        setValue("estado", libro.estado);
        setValue("genero", libro.genero);
        setModalOpen(true);
    };

    // Eliminar libro
    const handleDelete = async (id) => {
        if (!window.confirm("¿Eliminar este libro?")) return;
        try {
            await fetchData({ resource, method: "DELETE", id });
            toast.success("Libro eliminado correctamente");
            cargarLibros();
        } catch {
            setApiError("Error al eliminar el libro.");
            toast.error("Error al eliminar el libro");
        }
    };

    // Enviar formulario (agregar o editar)
    const onSubmit = async (data) => {
        setApiError("");
        try {
            if (editLibro) {
                await fetchData({ resource, method: "PUT", id: editLibro.id, body: data });
                toast.success("Libro editado correctamente");
            } else {
                await fetchData({ resource, method: "POST", body: data });
                toast.success("Libro agregado correctamente");
            }
            setModalOpen(false);
            cargarLibros();
        } catch {
            setApiError("Error al guardar el libro.");
            toast.error("Error al guardar el libro");
        }
    };

    return (
        <div className="dashboard-page" style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
            <h1>Dashboard</h1>
            <Button text="Agregar libro" onClick={handleAdd} />
            {apiError && <p style={{ color: "red" }}>{apiError}</p>}
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <List
                    items={libros}
                    renderItem={libro => (
                        <Card>
                            <h3>{libro.titulo}</h3>
                            <p><b>Autor:</b> {libro.autor}</p>
                            <p><b>Estado:</b> {libro.estado}</p>
                            <p><b>Género:</b> {libro.genero}</p>
                            <div style={{ display: "flex", gap: 8 }}>
                                <Button text="Editar" onClick={() => handleEdit(libro)} />
                                <Button text="Eliminar" onClick={() => handleDelete(libro.id)} />
                            </div>
                        </Card>
                    )}
                />
            )}

            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={editLibro ? "Editar libro" : "Agregar libro"}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText
                        label="Título"
                        placeholder="Título del libro"
                        {...register("titulo", { required: "El título es obligatorio" })}
                        error={errors.titulo?.message}
                    />
                    <InputText
                        label="Autor"
                        placeholder="Autor del libro"
                        {...register("autor", { required: "El autor es obligatorio" })}
                        error={errors.autor?.message}
                    />
                    <InputText
                        label="Estado"
                        placeholder="Estado del libro"
                        {...register("estado", { required: "El estado es obligatorio" })}
                        error={errors.estado?.message}
                    />
                    <InputText
                        label="Género"
                        placeholder="Género del libro"
                        {...register("genero", { required: "El género es obligatorio" })}
                        error={errors.genero?.message}
                    />
                    <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                        <Button type="submit" text={editLibro ? "Guardar cambios" : "Agregar"} />
                        <Button type="button" text="Cancelar" onClick={() => setModalOpen(false)} />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default DashboardPage;