class FortuneSerializer

    def initialize (fortune_object)
        binding.pry
        @fortunes = fortune_object
    end

    def to_serialized_json
        binding.pry
        @fortunes.to_json(only: [:id, :resource_id, :posVibes, :user_id])
    end
end