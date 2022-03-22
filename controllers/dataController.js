
data = [
    {
        "id": 0,
        "name": "Fresh Avocados",
    },
    {
        "id": 1,
        "name": "Goat and Sheep Cheese",
    },
    {
        "id": 2,
        "name": "Apollo Broccoli",
    },
    {
        "id": 3,
        "name": "Baby Carrots",
    },
    {
        "id": 4,
        "name": "Sweet Corncobs",
    }
]

exports.getAllData = (req, res) => {
    res.status(200).json(data);

}

exports.getSingleEntry = (req, res) => {
    const id = req.params.id * 1
    let returnData = data.find(el => el.id === id)
    if (!returnData) {
        return res.status(404).json({"message": "Invalid ID"})
    }
    res.status(200).json(returnData);
}

exports.updateData = (req, res) => {
    const id = req.params.id * 1
    let updateRecord = data.find(el => el.id === id)
    if (!updateRecord) {
        return res.status(404).json({"message": "Invalid ID"})
    }
    updateRecord.name = req.body.name
    res.status(200).json(updateRecord)
}

exports.deleteSingleEntry = (req, res) => {
    const id = req.params.id * 1
    let deleteRecordIndex = data.findIndex(el => el.id === id)
    if (deleteRecordIndex === -1) {
        return res.status(404).json({"message": "Invalid ID"})
    }
    data.splice(deleteRecordIndex, 1)
    res.status(204).json({"message": "deleted"})
}

exports.addNewData = (req, res) => {
    const newId = data[data.length - 1].id + 1;
    let newData = Object.assign({"id": newId}, req.body)
    data.push(newData)
    res.status(201).json(newData)
}


