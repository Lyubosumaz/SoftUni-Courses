const fs = require('fs');
const patch = require('path');


class CubeModel {
    constructor() {
        this.data = require('../config/database');
    };

    _write(newData, resolveData) {
        return new Promise((resolve, reject) => {
            fs.writeFile(patch.resolve('config/database.json'), JSON.stringify(newData, null, 2), (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                this.data = newData;
                resolve(resolveData);
            });
        });
    }

    create(name, description, imageUrl, difficultyLevel) {
        return { name, description, imageUrl, difficultyLevel }
    }

    insert(newCube) {
        const newIndex = this.data.lastIndex + 1;
        newCube = { id: newIndex, ...newCube };
        const newData = {
            lastIndex: newIndex,
            entities: this.data.entities.concat(newCube)
        };

        return this._write(newData, newCube);
    }

    update(cubeId, update) {
        const entityIndex = this.data.entities.findIndex(({ id }) => id === cubeId);
        const entity = this.data.entities[entityIndex];
        const updateEntity = { ...entity, ...update };

        const newData = {
            lastIndex: this.data.lastIndex,
            entities: [
                ...this.data.entities.slice(0, entityIndex),
                updateEntity,
                ...this.data.entities.slice(entityIndex + 1)
            ]
        };

        return this._write(newData, updateEntity);
    }

    delete(id) {
        const deleteData = this.getOne(id);
        const newData = {
            lastIndex: this.data.lastIndex,
            entities: this.data.entities.filter(({ id: i }) => i !== id)
        }

        return this._write(newData, deleteData);
    }

    find(predFn) {
        return Promise.resolve(this.data.entities.filter(predFn));
    }

    getOne(id) {
        // return Promise.resolve(this.data.entities.find(({ id: i }) => i === Number(id)));
        return this.find(({ id: i }) => i === Number(id)).then(res => res[0] || null);
    }

    getAll() {
        return Promise.resolve(this.data.entities);
    }
}

module.exports = new CubeModel();