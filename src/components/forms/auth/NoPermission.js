const NoPermission = () => {
    return (
        <div className="d-flex justify-content-between mt-3 alert alert-warning">
            <h2 className="font-inter font-bold text-xl p-5 rounded-lg max-w-[500px]">
                You don't have permission to edit this content
            </h2>
        </div>
    );
}

export default NoPermission;