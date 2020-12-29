const { Kafka } = require('kafkajs')
const Chance = require('chance')

const chance = new Chance()

const k = new Kafka({
  clientId: 'random-countries-producer',
  brokers: ['localhost:9092'],
})

const producer = k.producer()

const from = '-from-kafkajs'

const createMessage = async () => {
  try {
    await producer.send({
      topic: 'countries',
      messages: [{ value: chance.country({ full: true }).concat(from) }],
    })
  } catch (err) {
    console.log(err)
  }
}

const run = async () => {
  await producer.connect()
  setInterval(createMessage, 1000)
}

run().catch(console.error)
