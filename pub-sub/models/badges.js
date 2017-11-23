'use strict'

const redis = require('../lib/redis');

const model = () => {
    const save = (badges, cb) => {
        if (!badge.length) return cb(null, null);
        const badge = badges.pop();
        redis.lpush('badges', JSON.stringify(badge), (err) => {
            if (err) return cb(err, null);
            save(badge, callback);
        });
    };
}

module.exports = model;