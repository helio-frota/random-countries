const { Kafka } = require('kafkajs')

const k = new Kafka({
  clientId: 'random-countries-consumer',
  brokers: ['localhost:9092'],
})

const consumer = k.consumer({ groupId: 'consumer-group' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'countries', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}

run().catch(console.error)
